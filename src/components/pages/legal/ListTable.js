import Pagination from '@/components/Pagination'
import { convertDate } from '@/utils'
import Link from 'next/link'

const ListTable = ({ dataLegal }) => {
  return (
    <>
      <div className='relative overflow-x-auto pt-8'>
        <table className="shadow-slate-400 overflow-hidden w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-solid border border-[#ddd]">
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr className='bg-[#89D4FD] dark:bg-[#fff]'>
              <th scope="col" className="text-[#153680] px-6 py-3 text-[15px]">STT</th>
              <th scope="col" className="text-[#153680] px-6 py-3 whitespace-nowrap text-[15px]">Số / ký hiệu</th>
              <th scope="col" className="text-[#153680] px-6 py-3 whitespace-nowrap text-[15px]">Ngày ban hành</th>
              <th scope="col" className="text-[#153680] px-6 py-3 whitespace-nowrap text-[15px]">Mô tả / Trích yếu</th>
            </tr>
          </thead>
          <tbody>
            {(dataLegal && dataLegal?.data?.length > 0) ? dataLegal?.data?.map((val, index) => {
              return (
                <tr key={val?.id} className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                  <td className="px-6 py-4 text-center border-solid border border-[#ddd]">{index + 1}</td>
                  <td className="px-6 py-4 border-solid border border-[#ddd]">
                    <Link
                      prefetch={false}
                      href={`/van-ban/${val?.id}`}
                      className="flex gap-[30px] no-underline leading-6 text-[15px]"
                    >
                      {val?.name || "Đang cập nhật"}
                    </Link>
                  </td>
                  <td className="px-6 py-4 border-solid border border-[#ddd]">
                    <Link
                      prefetch={false}
                      href={`/van-ban/${val?.id}`}
                      className="flex gap-[30px] no-underline leading-6 text-[15px]"
                    >
                      {val?.date_issue ? convertDate(val?.date_issue) : "Đang cập nhật."}
                    </Link>
                  </td>
                  <td className="px-6 py-4 border-solid border border-[#ddd]">
                    <Link
                      prefetch={false}
                      href={`/van-ban/${val?.id}`}
                      className="flex gap-[30px] no-underline leading-6 text-[15px]"
                    >
                      {val?.describe ? val?.describe : 'Đang cập nhật.'}
                    </Link>
                    <button className="mt-4 bg-[#ddd] rounded-[2px] py-[5px] text-[13px]">
                      {val?.url ?
                        (
                          <Link
                            prefetch={false}
                            href={val?.url || "/"}
                            className="flex gap-[5px] no-underline flex text-[#111] justify-center content-center px-[15px]"
                          >
                            Tải về
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                          </Link>
                        ) : null}
                    </button>
                  </td>
                </tr>
              )
            }) : (
              <tr>
                <td colSpan={4} className="text-center py-4">Không có dữ liệu</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {dataLegal?.meta?.last_page > 1 &&
        <Pagination dataPage={dataLegal} />
      }
    </>
  )
}

export default ListTable