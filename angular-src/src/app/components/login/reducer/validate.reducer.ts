import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Validate } from '../models/validate.model';
import * as ValidateActions from '../actions/validate.actions';

export const validatesFeatureKey = 'validates';

export interface State extends EntityState<Validate> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Validate> = createEntityAdapter<Validate>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const validateReducer = createReducer(
  initialState,
  on(ValidateActions.addValidate,
    (state, action) => adapter.addOne(action.validate, state)
  ),
  on(ValidateActions.upsertValidate,
    (state, action) => adapter.upsertOne(action.validate, state)
  ),
  on(ValidateActions.addValidates,
    (state, action) => adapter.addMany(action.validates, state)
  ),
  on(ValidateActions.upsertValidates,
    (state, action) => adapter.upsertMany(action.validates, state)
  ),
  on(ValidateActions.updateValidate,
    (state, action) => adapter.updateOne(action.validate, state)
  ),
  on(ValidateActions.updateValidates,
    (state, action) => adapter.updateMany(action.validates, state)
  ),
  on(ValidateActions.deleteValidate,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ValidateActions.deleteValidates,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ValidateActions.loadValidates,
    (state, action) => adapter.addAll(action.validates, state)
  ),
  on(ValidateActions.clearValidates,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return validateReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
