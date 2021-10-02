import React from 'react'

const Pagination = ({imagesPerPage,totalImages,paginate}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalImages/imagesPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((num)=>(
                    <li key={num} className="page-item">
                        <a href="#" className="page-link" onClick={()=>paginate(num)}>{num}</a>
                    </li>
                ))

                }

            </ul>
            
        </nav>
    )
}

export default Pagination
