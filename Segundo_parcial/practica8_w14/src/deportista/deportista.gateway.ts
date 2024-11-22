import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { DeportistaService } from './deportista.service';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';

@WebSocketGateway({ cors: true })
export class DeportistaGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly deportistaService: DeportistaService) {}

  handleConnection(client: Socket) {
    console.log('Cliente desconectado por token.');
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('crearDeportista')
  async create(@MessageBody() createDeportistaDto: CreateDeportistaDto) {
    try {
      console.log('Datos para crear Deportista:', createDeportistaDto);
      const createdDeportista = await this.deportistaService.create(createDeportistaDto); 
      if (!createdDeportista) {
        return { estado: 'error', mensaje: 'No se pudo crear el Deportista' };
      }

      this.server.emit('deportistaCreado', createdDeportista);
      return { estado: 'éxito', datos: createdDeportista };
    } catch (error) {
      console.error('Error al crear el Deportista:', error);
      return { estado: 'error', mensaje: 'No se pudo crear el Deportista' };
    }
  }

  @SubscribeMessage('buscarTodosDeportistas')
  async findAll() {
    try {
      const deportistas = await this.deportistaService.findAll();
      return { estado: 'éxito', datos: deportistas };
    } catch (error) {
      console.error('Error al obtener los Deportistas:', error);
      return { estado: 'error', mensaje: 'No se pudieron obtener los Deportistas' };
    }
  }

  @SubscribeMessage('buscarDeportista')
  async findOne(@MessageBody() id: number) {
    try {
      const deportista = await this.deportistaService.findOne(id);
      if (!deportista) {
        return { estado: 'error', mensaje: 'Deportista no encontrado' };
      }
      return { estado: 'éxito', datos: deportista };
    } catch (error) {
      console.error('Error al obtener el Deportista:', error);
      return { estado: 'error', mensaje: 'No se pudo obtener el Deportista' };
    }
  }

  @SubscribeMessage('actualizarDeportista')
  async update(@MessageBody() updateDeportistaDto: UpdateDeportistaDto) {
    try {
      const updatedDeportista = await this.deportistaService.update(updateDeportistaDto.id, updateDeportistaDto);
      if (!updatedDeportista) {
        return { estado: 'error', mensaje: 'Deportista no encontrado o no se pudo actualizar' };
      }
      this.server.emit('deportistaActualizado', updatedDeportista);
      return { estado: 'éxito', datos: updatedDeportista };
    } catch (error) {
      console.error('Error al actualizar el Deportista:', error);
      return { estado: 'error', mensaje: 'No se pudo actualizar el Deportista' };
    }
  }

  @SubscribeMessage('eliminarDeportista')
  async remove(@MessageBody() id: number) {
    try {
      const result = await this.deportistaService.remove(id);
      if (!result) {
        return { estado: 'error', mensaje: 'Deportista no encontrado o no se pudo eliminar' };
      }
      this.server.emit('deportistaEliminado', { id });
      return { estado: 'éxito', mensaje: 'Deportista eliminado correctamente' };
    } catch (error) {
      console.error('Error al eliminar el Deportista:', error);
      return { estado: 'error', mensaje: 'No se pudo eliminar el Deportista' };
    }
  }
}
