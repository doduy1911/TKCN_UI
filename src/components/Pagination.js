"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import ReactPaginate from "react-paginate"

const Pagination = ({ dataPage }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Total page
  const pageCount = dataPage.meta.last_page

  // Current page
  const currentPage = searchParams.get("page") || 1

  // Next page
  const handlePagination = (page) => {
    if (isNaN(parseFloat(page.selected)) || page.selected == 0) {
      router.push(`${pathname}`)
    }
    else {
      const current = page.selected + 1;
      router.push(`${pathname}?page=${current}`)
    }
  }

  return (
    <ReactPaginate
      pageCount={pageCount}
      breakLabel="..."
      nextLabel={">"}
      previousLabel={"<"}
      onPageChange={handlePagination}
      pageRangeDisplayed={5}
      marginPagesDisplayed={3}
      activeClassName="active bg-gray-300"
      pageClassName="page-item px-2 border"
      breakClassName="page-item px-2 border"
      renderOnZeroPageCount={null}
      disableInitialCallback={true}
      forcePage={currentPage - 1}
      className="paginate-table flex-center"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      nextClassName="page-item next px-2 border"
      previousClassName="page-item prev px-2 border"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link"
      containerClassName="pagination react-paginate"
    />
  )
}

export default Pagination