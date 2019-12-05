import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Validate } from './validate.model';

export const loadValidates = createAction(
  '[Validate/API] Load Validates', 
  props<{ validates: Validate[] }>()
);

export const addValidate = createAction(
  '[Validate/API] Add Validate',
  props<{ validate: Validate }>()
);

export const upsertValidate = createAction(
  '[Validate/API] Upsert Validate',
  props<{ validate: Validate }>()
);

export const addValidates = createAction(
  '[Validate/API] Add Validates',
  props<{ validates: Validate[] }>()
);

export const upsertValidates = createAction(
  '[Validate/API] Upsert Validates',
  props<{ validates: Validate[] }>()
);

export const updateValidate = createAction(
  '[Validate/API] Update Validate',
  props<{ validate: Update<Validate> }>()
);

export const updateValidates = createAction(
  '[Validate/API] Update Validates',
  props<{ validates: Update<Validate>[] }>()
);

export const deleteValidate = createAction(
  '[Validate/API] Delete Validate',
  props<{ id: string }>()
);

export const deleteValidates = createAction(
  '[Validate/API] Delete Validates',
  props<{ ids: string[] }>()
);

export const clearValidates = createAction(
  '[Validate/API] Clear Validates'
);
