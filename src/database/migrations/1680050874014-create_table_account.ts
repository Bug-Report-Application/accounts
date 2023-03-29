import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableAccount1680050874014 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE public.accounts (
            id integer NOT NULL,
            name character varying NOT NULL,
            email  character varying NOT NULL,
            password  character varying NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            primary key (id)
        );

        CREATE SEQUENCE public.accounts_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
                
        ALTER SEQUENCE public.accounts_id_seq OWNED BY public.accounts.id;
            
        ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE public.accounts`);
  }
}
