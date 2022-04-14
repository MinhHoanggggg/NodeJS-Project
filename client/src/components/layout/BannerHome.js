import videobg from '../../assets/videobg.png'

const Banner = () => {
    return (
        <div className="page-banner">
            <div className='hvrbox'>
                <img src={videobg} alt="Mountains" class="hvrbox-layer_bottom" />
                <div class="hvrbox-layer_top">
                    <div class="container">
                        <div class="overlay-text text-center">
                            <h2 style={{color: 'white'}}>The Future Begins Here</h2>
                            <h5 style={{color: 'white'}}>Đã có hơn 136,554++ lượt học và tìm kiếm thông tin tại 3H.com!</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner