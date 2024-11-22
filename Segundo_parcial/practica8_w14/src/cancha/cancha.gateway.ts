import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CanchaService } from './cancha.service';
import { CreateCanchaDto } from './dto/create-cancha.dto';
import { UpdateCanchaDto } from './dto/update-cancha.dto';

@WebSocketGateway({ cors: true })
export class CanchaGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly canchaService: CanchaService) {}

  handleConnection(client: Socket) {
    console.log('Cliente desconectado por token.');
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('crearCancha')
  async create(@MessageBody() createCanchaDto: CreateCanchaDto) {
    try {
      console.log('Datos para crear Cancha:', createCanchaDto);
      const createdCancha = await this.canchaService.create(createCanchaDto); 
      if (!createdCancha) {
        return { estado: 'error', mensaje: 'No se pudo crear la Cancha' };
      }

      this.server.emit('canchaCreada', createdCancha);
      return { estado: 'éxito', datos: createdCancha };
    } catch (error) {
      console.error('Error al crear la Cancha:', error);
      return { estado: 'error', mensaje: 'No se pudo crear la Cancha' };
    }
  }

  @SubscribeMessage('buscarTodasCanchas')
  async findAll() {
    try {
      const canchas = await this.canchaService.findAll();
      return { estado: 'éxito', datos: canchas };
    } catch (error) {
      console.error('Error al obtener las Canchas:', error);
      return { estado: 'error', mensaje: 'No se pudieron obtener las Canchas' };
    }
  }

  @SubscribeMessage('buscarCancha')
  async findOne(@MessageBody() id: number) {
    try {
      const cancha = await this.canchaService.findOne(id);
      if (!cancha) {
        return { estado: 'error', mensaje: 'Cancha no encontrada' };
      }
      return { estado: 'éxito', datos: cancha };
    } catch (error) {
      console.error('Error al obtener la Cancha:', error);
      return { estado: 'error', mensaje: 'No se pudo obtener la Cancha' };
    }
  }

  @SubscribeMessage('actualizarCancha')
  async update(@MessageBody() updateCanchaDto: UpdateCanchaDto) {
    try {
      const updatedCancha = await this.canchaService.update(updateCanchaDto.id, updateCanchaDto);
      if (!updatedCancha) {
        return { estado: 'error', mensaje: 'Cancha no encontrada o no se pudo actualizar' };
      }
      this.server.emit('canchaActualizada', updatedCancha);
      return { estado: 'éxito', datos: updatedCancha };
    } catch (error) {
      console.error('Error al actualizar la Cancha:', error);
      return { estado: 'error', mensaje: 'No se pudo actualizar la Cancha' };
    }
  }

  @SubscribeMessage('eliminarCancha')
  async remove(@MessageBody() id: number) {
    try {
      const result = await this.canchaService.remove(id);
      if (!result) {
        return { estado: 'error', mensaje: 'Cancha no encontrada o no se pudo eliminar' };
      }
      this.server.emit('canchaEliminada', { id });
      return { estado: 'éxito', mensaje: 'Cancha eliminada correctamente' };
    } catch (error) {
      console.error('Error al eliminar la Cancha:', error);
      return { estado: 'error', mensaje: 'No se pudo eliminar la Cancha' };
    }
  }
}
