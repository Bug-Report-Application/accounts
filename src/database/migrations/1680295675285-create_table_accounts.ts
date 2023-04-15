import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableAccount1680050874014 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE public.accounts (
            id SERIAL NOT NULL,
            name VARCHAR(255) NOT NULL,
            email  VARCHAR(50) UNIQUE NOT NULL,
            password  VARCHAR(16) NOT NULL,
            main_account_id INT,
            type VARCHAR(10) NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT now(),
            updated_at TIMESTAMP NOT NULL DEFAULT now(),
            PRIMARY KEY (id),
            FOREIGN KEY (main_account_id) REFERENCES accounts (id) ON DELETE CASCADE
        );
    `);

    await queryRunner.query(`
        INSERT INTO public.accounts (name,email,password,type)
        VALUES ('admin','admin@email.com','senha123','admin');
        INSERT INTO public.accounts (name,email,password,main_account_id,type)
        VALUES ('developer','developer@email.com','senha123',1,'developer'),
              ('tester','tester@email.com','senha123',1,'tester');
    `);

    await queryRunner.query(`
        CREATE TABLE public.avatar (
            id SERIAL NOT NULL,
            account_id INT NOT NULL,
            avatar TEXT,
            PRIMARY KEY (id),
            FOREIGN KEY (account_id) REFERENCES accounts (id) ON DELETE CASCADE
        );
    `);

    await queryRunner.query(`
        INSERT INTO public.avatar (account_id, avatar)
        VALUES (1, 'base64doavatar');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE public.accounts`);

    await queryRunner.query(`DROP TABLE public.avatar`);
  }
}
