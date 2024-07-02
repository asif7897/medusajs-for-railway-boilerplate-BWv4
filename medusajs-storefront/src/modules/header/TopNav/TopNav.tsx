import React from 'react'

interface Props {
    props: string;
    slogan: string;
}

const TopNav: React.FC<Props> = ({ props, slogan }) => {
    return (
        <>
            <div className={`top-nav md:h-[44px] h-[30px] px-5 text-xs ${props}`}>
                <div className="container mx-auto h-full">
                    <div className="top-nav-main flex justify-between max-md:justify-center h-full">
                        
                        <div className="text-center text-button-uppercase  flex items-center">
                            {slogan}
                        </div>

                        <div className="text-center text-button-uppercase  flex items-center">
                          ENABLE ACCESSIBILITY
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav