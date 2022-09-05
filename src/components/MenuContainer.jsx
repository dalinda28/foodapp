import React from 'react'

const MenuContainer = () => {
    return (
        <div id='menu'>
            <section className="overflow-hidden text-gray-700">
                <div className="container mx-auto lg:px-32">
                    <div className="grid-cols-3 space-y-2lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
                        <div className="w-full rounded">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://www.grizette.com/wp-content/uploads/2021/04/Patisserie-Montpellier%C2%A9Edalin-AdobeStock.jpeg" />
                        </div>
                        <div className="w-full col-span-2 row-span-2 rounded">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://www.grizette.com/wp-content/uploads/2021/04/Patisserie-Montpellier%C2%A9Edalin-AdobeStock.jpeg" />
                        </div>
                        <div className="w-full rounded">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://www.grizette.com/wp-content/uploads/2021/04/Patisserie-Montpellier%C2%A9Edalin-AdobeStock.jpeg" />
                        </div>
                        <div className="w-full rounded">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://www.grizette.com/wp-content/uploads/2021/04/Patisserie-Montpellier%C2%A9Edalin-AdobeStock.jpeg" />
                        </div>
                        <div className="w-full rounded">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://www.grizette.com/wp-content/uploads/2021/04/Patisserie-Montpellier%C2%A9Edalin-AdobeStock.jpeg" />
                        </div>
                        <div className="w-full rounded">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://www.grizette.com/wp-content/uploads/2021/04/Patisserie-Montpellier%C2%A9Edalin-AdobeStock.jpeg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MenuContainer