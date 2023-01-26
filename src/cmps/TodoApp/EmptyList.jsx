export function EmptyList({ isFiltered }) {

   return <>
      {!isFiltered && <p className='empty-list'>No tasks have been created yet, add your first task above</p>}
      {isFiltered && <p className='empty-list'>No results matching your search</p>}
   </>
}