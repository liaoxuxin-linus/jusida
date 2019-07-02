<script>
	export default {
		onLaunch: () => {
		},
		onShow: function() {
		},
		onHide: () => {
		}
	}
</script>

<style lang="scss">
	@import "./common/uni.css";
	page{
		min-height: 100%;
	}
	.page {
		.btn {
// 			display: block;
// 			width: 250upx;
// 			padding: 10upx 0;
// 			border-radius: 50upx;
// 			borde-width: 0;
// 			color: #000;
// 			margin: 10upx;
// 			color: #000;
			display:block;
			min-width:90px;
			padding:2px 15px;
			border-radius:50rpx;
			borde-width:0;
			color:#000;
			margin:10rpx;
			color:#000;
			font-size:12px;
		}

		.btn.btn_hover {
			color: rgba(0, 0, 0, 0.6);
		}

		.bar-options {
			width: auto;
			height: 60upx;
			display: flex;
			box-sizing: border-box;
			align-items: center;
			justify-content: space-around;
			position: absolute;
			left: 25upx;
			display: flex;
			align-items: center;
			border-radius: 27px;
			padding: 0 10upx;
			.opt {
				width: 70upx;
				height: 70upx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.opt-back {
				.back-image {
					width: 16upx;
					height: 28upx;
				}
			}

			.line {
				display: block;
				height: 30upx;
				width: 1px;
				background-color: gray;
				margin: 0 20upx;
			}

			.opt-home {
				.home-image {
					width: 36upx;
					height: 34upx;
				}
			}
		}

		.row {
			display: flex;
			flex-direction: row;
			margin: 0px;
			width: 100%;
			flex-wrap: wrap;
		}

		.col-1,
		.col-2,
		.col-3,
		.col-4,
		.col-5,
		.col-6,
		.col-7,
		.col-8,
		.col-9,
		.col-10,
		.col-11,
		.col-12 {
			height: 100%;
			width: 100%;
			text-align: center;
			padding: 5upx;
			box-sizing: border-box;
			display: flex;
			-ms-flex-direction: column;
			flex-direction: column;
			-ms-flex-pack: center;
			justify-content: center;
			-ms-flex-align: center;
			align-items: center;
			/* overflow: hidden; */
		}

		.col-1 {
			width: 8.33333333333333%;
		}

		.col-2 {
			width: 16.6666666666666%;
		}

		.col-3 {
			width: 25%;
		}

		.col-4 {
			width: 33.3333333333333%;
		}

		.col-5 {
			width: 41.6666666666666%;
		}

		.col-6 {
			width: 50%;
		}

		.col-7 {
			width: 58.333333333333333%;
		}

		.col-8 {
			width: 66.66666666666666%;
		}

		.col-9 {
			width: 75%;
		}

		.col-10 {
			width: 83.33333333333333%;
		}

		.col-11 {
			width: 91.66666666666666%;
		}

		.col-12 {
			width: 100%;
		}

		/* btn_class */

		.b_radius_20 {
			border-radius: 20px;
		}

		.btn_bordr_color {
			border-color: #999999;
			border: solid 1upx;
		}

		/* border-radius_class */
		.b_radius_10 {
			border-radius: 10upx
		}

		.b_radius_20 {
			border-radius: 20upx
		}

		.b_radius_30 {
			border-radius: 50upx
		}

		.b_radius_50 {
			border-radius: 50upx
		}

		/* width_class */
		.w-100 {
			width: 100%;
		}

		.w-90 {
			width: 90%;
		}

		.w-80 {
			width: 80%;
		}

		.w-70 {
			width: 70%;
		}

		.w-60 {
			width: 60%;
		}

		.w-50 {
			width: 50%;
		}

		.w-40 {
			width: 40%;
		}

		.w-30 {
			width: 30%;
		}

		.w-20 {
			width: 20%;
		}
		
		.w-25 {
			width: 25%;
		}
		.w-75 {
			width: 75%;
		}

		.w-10 {
			width: 10%;
		}

		/* height_class */
		.h-100 {
			height: 100%;
		}

		/* order-clor-class */
		.bg-black {
			background-color: #000000;
		}

		.box_white {
			background-color: #FFFFFF;
		}

		.font_white {
			color: #fff;
		}

		.font_yellow {
			color: #FFCC33;
		}

		.font_black {
			color: #333333;
		}

		.font_gray {
			color: #666666;
		}

		.bg_yellow {
			background-color: #FFC500;
			background: #FFC500;
		}

		.bg_gray {
			background-color: #666666;
		}

		/*box-margin-class  */
		.p-0 {
			padding: 0upx;
		}

		.p-5 {
			padding: 5upx;
		}

		.p-15 {
			padding: 15upx;
		}
		.pl-0 {
			padding-left: 0upx;
		}

		.pl-5 {
			padding-left: 5upx;
		}

		.pl-15 {
			padding-left: 15upx;
		}
		.m-0 {
			margin: 0upx;
		}

		.m-5 {
			margin: 5upx;
		}

		.ml-5 {
			margin-left: 5upx;
		}

		.ml-10 {
			margin-left: 10upx;
		}

		.ml-20 {
			margin-left: 20upx;
		}

		.ml-30 {
			margin-left: 30upx;
		}

		.ml-50 {
			margin-left: 50upx;
		}

		.ml-70 {
			margin-left: 70upx;
		}

		.ml-100 {
			margin-left: 100upx;
		}

		.ml-130 {
			margin-left: 130upx;
		}

		.mr-5 {
			margin-right: 5upx;
		}

		.mr-10 {
			margin-right: 10upx;
		}

		.mr-20 {
			margin-right: 20upx;
		}

		.mr-30 {
			margin-right: 30upx;
		}

		.mr-40 {
			margin-right: 40upx;
		}

		.mr-50 {
			margin-right: 50upx;
		}

		.mt-5 {
			margin-top: 5upx;
		}

		.mt-10 {
			margin-top: 10upx;
		}

		.mt-20 {
			margin-top: 20upx;
		}

		.mt-30 {
			margin-top: 30upx;
		}

		.mb-5 {
			margin-bottom: 5upx;
		}

		.mb-10 {
			margin-bottom: 10upx;
		}

		.mb-20 {
			margin-bottom: 20upx;
		}

		.mb-30 {
			margin-bottom: 30upx;
		}

		.mb-50 {
			margin-bottom: 50upx;
		}

		.t-0 {
			top: 0;
		}

		.t-5 {
			top: 5upx;
		}

		.t-10 {
			top: 10upx;
		}

		.t-20 {
			top: 20upx;
		}

		.t-30 {
			top: 30upx;
		}

		.l-0 {
			left: 0;
		}

		.l-5 {
			left: 5upx;
		}

		.l-10 {
			left: 10upx;
		}

		.l-20 {
			left: 20upx;
		}

		.l-30 {
			left: 30upx;
		}

		.r-5 {
			right: 5upx;
		}

		.r-10 {
			right: 10upx;
		}

		.r-20 {
			right: 20upx;
		}

		.r-30 {
			right: 30upx;
		}

		/* position */
		.position-relative {
			position: relative;
		}

		.position-absolute {
			position: absolute;
		}

		.position-fixed {
			position: fixed;
		}

		/* alignment-class */
		.text-center {
			text-align: center;
		}

		.text-left {
			text-align: left;
		}

		.text-right {
			text-align: right;
		}
		.font-weight-bold{
			font-weight: bold;
		}
		.d-flex {
			display: -webkit-flex;
			/* Safari */
			display: flex;
		}

		.d-flex-row {
			flex-direction: row;
		}
		.flex-wrap{
			flex-wrap: wrap;
		}
		.d-flex-column {
			flex-direction: column;
		}

		.d-flex-wrap {
			flex-wrap: wrap;
		}

		.align-items-center {
			align-items: center;
		}

		.justify-content-center {
			justify-content: center;
		}
				.justify-content-left {
			justify-content: left;
		}

		.bg {
			position: fixed;
			width: 100%;
			height: 100%;
			z-index: -1;
		}
	}

	/*每个页面公共css */
</style>
