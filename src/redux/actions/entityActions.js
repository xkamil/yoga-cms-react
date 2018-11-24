export const UPDATE_ENTITY = 'UPDATE_ENTITY';
export const UPDATE_ENTITY_ERROR = 'UPDATE_ENTITY_ERROR';

export function setEditedEntity(entity) {
    return {type: UPDATE_ENTITY, data: entity}
}

export function setNextEditedEntityError(error) {
    return {type: UPDATE_ENTITY_ERROR, data: error}
}