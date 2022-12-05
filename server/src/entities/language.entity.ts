/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, PrimaryColumn } from 'typeorm';

/**
 * A Language.
 */
@Entity('languages')
export class Language {
  @PrimaryColumn({ name: 'code', length: 2 })
  code: string;

  @Column({ type: 'text', name: 'name', nullable: true })
  name: string;

  @Column({ type: 'boolean', name: 'is_active', default: true })
  is_active: boolean;

  @Column({ type: 'boolean', name: 'is_deleted', default: false })
  is_deleted: boolean;

  @Column({ type: 'boolean', name: 'is_default' })
  is_default: boolean;

  // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
