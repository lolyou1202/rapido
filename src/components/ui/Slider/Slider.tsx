import './Slider.style.scss'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { DefaultButton } from '../Button/DefaultButton/DefaultButton'
import { ArrowSliderLeft } from '../../icons/ArrowSliderLeft'
import { ArrowSliderRight } from '../../icons/ArrowSliderRight'
import { colorTokens } from '../../../constants/colorTokens'

const { white } = colorTokens

export const Slider = ({ sliderList }: { sliderList: React.ReactNode[] }) => {
	return (
		<div style={{height: '100%'}}>
			<DefaultButton
				action={false}
				className='slider-navigationButton slider-prevButton'
				icon={<ArrowSliderLeft color={white} />}
			/>
			<DefaultButton
				action={false}
				className='slider-navigationButton slider-nextButton'
				icon={<ArrowSliderRight color={white} />}
			/>
			<Swiper
				direction='horizontal'
				navigation={{
					prevEl: '.slider-prevButton',
					nextEl: '.slider-nextButton',
					disabledClass: 'slider-disabled',
					navigationDisabledClass: 'slider-disabledButton',
				}}
				pagination={{
					clickable: true,
					horizontalClass: 'slider-pagination',
					bulletClass: 'slider-bulletButton',
					bulletActiveClass: 'slider-bulletActiveButton',
				}}
				loop={false}
				slidesPerView={1}
				spaceBetween={16}
				modules={[Navigation, Pagination]}
				className='slider-root'
				wrapperClass='slider-wrapper'
			>
				{sliderList.map((slide, index) => (
					<SwiperSlide className='slider-slide' key={index}>{slide}</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
