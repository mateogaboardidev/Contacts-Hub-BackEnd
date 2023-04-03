import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1680519587966 implements MigrationInterface {
    name = 'InitialMigration1680519587966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "tel" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
