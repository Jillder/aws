import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { SeparacionCanchaService } from './separacioncancha.service';
import { CreateSeparacionCanchaDto } from './dto/create-separacioncancha.dto';
import { UpdateSeparacioncanchaDto } from './dto/update-separacioncancha.dto';

@WebSocketGateway({ cors: true })
export class SeparacionCanchaGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly separacionCanchaService: SeparacionCanchaService) {}

  handleConnection(client: Socket) {
    const token = client.handshake.headers.authentication as string;
    console.log('Cliente desconectado por token.');
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('crearSeparacionCancha')
  async create(@MessageBody() createSeparacionCanchaDto: CreateSeparacionCanchaDto) {
    try {
      console.log('Datos para crear SeparacionCancha:', createSeparacionCanchaDto);
      const createdSeparacionCancha = await this.separacionCanchaService.create(createSeparacionCanchaDto); 
      if (!createdSeparacionCancha) {
        return { estado: 'error', mensaje: 'No se pudo crear la SeparacionCancha' };
      }

      this.server.emit('separacionCanchaCreada', createdSeparacionCancha);
      return { estado: 'éxito', datos: createdSeparacionCancha };
    } catch (error) {
      console.error('Error al crear la SeparacionCancha:', error);
      return { estado: 'error', mensaje: 'No se pudo crear la SeparacionCancha' };
    }
  }

  @SubscribeMessage('buscarTodasSeparacionesCancha')
  async findAll() {
    try {
      const separacionesCancha = await this.separacionCanchaService.findAll();
      return { estado: 'éxito', datos: separacionesCancha };
    } catch (error) {
      console.error('Error al obtener las SeparacionesCancha:', error);
      return { estado: 'error', mensaje: 'No se pudieron obtener las SeparacionesCancha' };
    }
  }

  @SubscribeMessage('buscarSeparacionCancha')
  async findOne(@MessageBody() id: number) {
    try {
      const separacionCancha = await this.separacionCanchaService.findOne(id);
      if (!separacionCancha) {
        return { estado: 'error', mensaje: 'SeparacionCancha no encontrada' };
      }
      return { estado: 'éxito', datos: separacionCancha };
    } catch (error) {
      console.error('Error al obtener la SeparacionCancha:', error);
      return { estado: 'error', mensaje: 'No se pudo obtener la SeparacionCancha' };
    }
  }

  @SubscribeMessage('actualizarSeparacionCancha')
  async update(@MessageBody() updateSeparacionCanchaDto: UpdateSeparacioncanchaDto) {
    try {
      const updatedSeparacionCancha = await this.separacionCanchaService.update(updateSeparacionCanchaDto.id, updateSeparacionCanchaDto);
      if (!updatedSeparacionCancha) {
        return { estado: 'error', mensaje: 'SeparacionCancha no encontrada o no se pudo actualizar' };
      }
      this.server.emit('separacionCanchaActualizada', updatedSeparacionCancha);
      return { estado: 'éxito', datos: updatedSeparacionCancha };
    } catch (error) {
      console.error('Error al actualizar la SeparacionCancha:', error);
      return { estado: 'error', mensaje: 'No se pudo actualizar la SeparacionCancha' };
    }
  }

  @SubscribeMessage('eliminarSeparacionCancha')
  async remove(@MessageBody() id: number) {
    try {
      const result = await this.separacionCanchaService.remove(id);
      if (!result) {
        return { estado: 'error', mensaje: 'SeparacionCancha no encontrada o no se pudo eliminar' };
      }
      this.server.emit('separacionCanchaEliminada', { id });
      return { estado: 'éxito', mensaje: 'SeparacionCancha eliminada correctamente' };
    } catch (error) {
      console.error('Error al eliminar la SeparacionCancha:', error);
      return { estado: 'error', mensaje: 'No se pudo eliminar la SeparacionCancha' };
    }
  }
}
