export const selectLibrary = (libraryId) => { // this function is an action creator
    return {
        type: 'select_library',
        payload: libraryId
    };
};