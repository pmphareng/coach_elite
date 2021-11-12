import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwipperCard from './SwipperCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// import Swiper core and required modules
import SwiperCore, { Pagination, FreeMode } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, FreeMode]);

export default function App() {
	return (
		<Swiper
			slidesPerView={'auto'}
			spaceBetween={30}
			freeMode={true}
			grabCursor={true}
			pagination={{
				clickable: true,
				type: 'progressbar',
			}}
			className='mySwiper'
		>
			<SwiperSlide>
				<SwipperCard />
			</SwiperSlide>
			<SwiperSlide>
				<SwipperCard />
			</SwiperSlide>
			<SwiperSlide>
				<SwipperCard />
			</SwiperSlide>
			<SwiperSlide>
				<SwipperCard />
			</SwiperSlide>
		</Swiper>
	);
}
