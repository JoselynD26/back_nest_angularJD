import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[
    JwtModule.register({
      secret: "Mi codigo secreto",
      signOptions:{expiresIn:'60S'}
    })
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
  
})
export class AuthModule {}
