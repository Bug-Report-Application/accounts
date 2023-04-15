import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { AccountType } from '../../domain';

@Entity('accounts')
export class AccountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: boolean;

  @Column({ name: 'main_account_id', nullable: true })
  mainAccountId: number;

  @Column()
  type: AccountType;
}
