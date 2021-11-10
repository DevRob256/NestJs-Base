import {
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
  DeleteDateColumn,
} from 'typeorm';

export class BaseModelEntity {
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @VersionColumn({ type: 'smallint', unsigned: true, default: 1 })
  version: number;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
