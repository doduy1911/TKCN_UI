const domain = process.env.NEXT_PUBLIC_API

// Get data listings
export const useData = async (typeName, category, currentPage) => {
   try {
      const time = `&time=${Date.now()}`
      const category_id = category ? `category_id=${category}` : ""
      const page = currentPage ? `&page=${currentPage}` : ""
      const res = await fetch(`${domain}${typeName}?${category_id}${page}&limit=2${time}`, { next: { revalidate: 60 } })
      if (!res.ok) {
         console.log("Tải dữ liệu thất bại");
      }
      const data = await res.json()
      return data?.data?.length > 0 ? data : []
   } catch (error) {
      console.log(error)
   }
}

// Get data detail
export const useDataDetail = async (typeName, detailId) => {
   try {
      const res = await fetch(`${domain}${typeName}/${detailId}`, { next: { revalidate: 60 } })
      if (!res.ok) {
         console.log("Tải dữ liệu thất bại");
      }
      const data = await res.json()
      return data
   } catch (error) {
      console.log(error)
   }
}

// Get post detail
export const usePostDetail = async (slug) => {
   try {
      const postRes = await fetch(`${domain}posts/details/${slug}`, { next: { revalidate: 60 } })
      const reportRes = await fetch(`${domain}reports/details/${slug}`, { next: { revalidate: 60 } })
      if (!postRes.ok && !reportRes.ok) {
         console.log("Tải dữ liệu thất bại");
      }
      const [post, report] = await Promise.all([postRes.json(), reportRes.json()])
      return { post, report }
   } catch (error) {
      console.log(error)
   }
}

// Get data search legal documents
export const useDataSearch = async (typeName, searchQuery, currentPage) => {
   try {
      const page = currentPage ? `&page=${currentPage}` : ""
      const res = await fetch(`${domain}${typeName}?${searchQuery}${page}`, { next: { revalidate: 60 } })
      if (!res.ok) {
         console.log("Tải dữ liệu thất bại");
      }
      const data = await res.json()
      return data?.data?.length > 0 ? data : []
   } catch (error) {
      console.log(error)
   }
}

// Get data category by type
export const useDataCategory = async (catName, typeName, currentPage) => {
   try {
      const typeNamePrams = typeName ? `type=${typeName}` : ""
      const page = currentPage ? `&page=${currentPage}` : ""
      const res = await fetch(`${domain}${catName}?${typeNamePrams}${page}`, { next: { revalidate: 60 } })
      if (!res.ok) {
         console.log("Tải dữ liệu thất bại");
      }
      const data = await res.json()
      return data?.data?.length > 0 ? data : []
   } catch (error) {
      console.log(error)
   }
}

export const useSearch = async (key) => {
   try {
      if (key === "") {
         return { data: [] }
      }
      const res = await fetch(`${domain}posts?search=${key}`, { next: { revalidate: 60 } })
      if (!res.ok) {
         console.log("Tải dữ liệu thất bại");
      }
      const data = await res.json()
      return data
   } catch (error) {
      console.log(error)
   }
}
