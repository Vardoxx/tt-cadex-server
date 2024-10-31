import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { OrderDto } from './order.dto'

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(id: string) {
    return this.prismaService.order.findMany({
      where: {
        id,
      },
    })
  }

  async create(dto: OrderDto) {
    const data = await this.prismaService.order.create({
      data: {
        ...dto,
      },
    })

    return { message: `Thank you for your interest, ${data.name}.` }
  }

  async update(id: string, dto: OrderDto) {
    return this.prismaService.order.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    })
  }

  async delete(id: string) {
    return this.prismaService.order.delete({
      where: { id },
    })
  }
}
