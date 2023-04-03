import { hashSync, getRounds } from "bcryptjs";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
class User {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  tel: string;

  @CreateDateColumn()
  createdAt: Date;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };
