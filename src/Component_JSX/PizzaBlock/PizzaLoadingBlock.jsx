import React from 'react'
import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
    return (
        <ContentLoader 
        className='pizza-block'
        speed={2}
        width={340.719}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
     
      >
        
        <circle cx="141" cy="142" r="140" /> 
        <rect x="0" y="287" rx="5" ry="5" width="280" height="24" />
        <rect x="4" y="417" rx="4" ry="4" width="89" height="27" /> 
        <rect x="127" y="408" rx="15" ry="15" width="154" height="44" /> 
        <rect x="0" y="317" rx="0" ry="0" width="280" height="84" />
      </ContentLoader>
      )
}

export default PizzaLoadingBlock