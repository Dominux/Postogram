import { Module } from '@nestjs/common';
import { VkController } from './vk.controller';
import { VkService } from './vk.service';

@Module({
  controllers: [VkController],
  providers: [VkService]
})
export class VkModule {}
