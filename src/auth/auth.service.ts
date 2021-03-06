import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { access } from 'fs';
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {    
  constructor(
    @InjectModel(User)
    private userModel: typeof User,    
  ) {}
  async UserValidation(userName: string, password: string) {  
    const user = await this.userModel.findOne({ where: { userName: userName } });
    if (user == null) return 'Usuário não encontrado';
    if (user.password === password) {
      return 'Autenticação com sucesso';
    } else return 'Senha incorreta';
  }
  async login (user:any) {
    const payload = {email: user.email, name: user.userName}
    return {
      access_token: payload,
    };
  }
}
