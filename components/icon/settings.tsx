import React from 'react';
import { IconProps } from '@/types/icons';

const SettingsIcon: React.FC<IconProps> = (props) => {
	return (
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g clipPath="url(#clip0_340_421)">
				<path
					d="M9.99996 6.6665C9.34069 6.6665 8.69622 6.862 8.14806 7.22827C7.5999 7.59454 7.17265 8.11514 6.92036 8.72423C6.66807 9.33331 6.60206 10.0035 6.73068 10.6501C6.85929 11.2967 7.17676 11.8907 7.64294 12.3569C8.10911 12.823 8.70306 13.1405 9.34966 13.2691C9.99626 13.3977 10.6665 13.3317 11.2756 13.0794C11.8847 12.8271 12.4053 12.3999 12.7715 11.8517C13.1378 11.3036 13.3333 10.6591 13.3333 9.99984C13.3333 9.11578 12.9821 8.26794 12.357 7.64281C11.7319 7.01769 10.884 6.6665 9.99996 6.6665ZM9.99996 11.6665C9.67033 11.6665 9.34809 11.5688 9.07401 11.3856C8.79993 11.2025 8.58631 10.9422 8.46016 10.6376C8.33402 10.3331 8.30101 9.99799 8.36532 9.67469C8.42963 9.35139 8.58836 9.05441 8.82145 8.82133C9.05454 8.58824 9.35151 8.4295 9.67481 8.3652C9.99811 8.30089 10.3332 8.33389 10.6378 8.46004C10.9423 8.58618 11.2026 8.79981 11.3857 9.07389C11.5689 9.34797 11.6666 9.6702 11.6666 9.99984C11.6666 10.4419 11.491 10.8658 11.1785 11.1783C10.8659 11.4909 10.442 11.6665 9.99996 11.6665Z"
					fill="#75819A"
				/>
				<path
					d="M17.745 11.5833L17.375 11.37C17.5416 10.4637 17.5416 9.53463 17.375 8.62833L17.745 8.415C18.0296 8.25085 18.279 8.03226 18.479 7.77172C18.6791 7.51118 18.8259 7.21378 18.911 6.89651C18.9961 6.57925 19.0179 6.24832 18.9751 5.92263C18.9324 5.59694 18.8259 5.28286 18.6617 4.99833C18.4976 4.7138 18.279 4.46439 18.0184 4.26434C17.7579 4.06428 17.4605 3.91751 17.1432 3.83239C16.826 3.74726 16.495 3.72547 16.1693 3.76824C15.8436 3.81101 15.5296 3.91751 15.245 4.08167L14.8742 4.29583C14.1738 3.69743 13.3689 3.23354 12.5 2.9275V2.5C12.5 1.83696 12.2366 1.20107 11.7678 0.732233C11.299 0.263392 10.6631 0 10 0C9.33699 0 8.70111 0.263392 8.23227 0.732233C7.76343 1.20107 7.50004 1.83696 7.50004 2.5V2.9275C6.63119 3.23464 5.82658 3.69967 5.1267 4.29917L4.7542 4.08333C4.17957 3.75181 3.49677 3.66214 2.85602 3.83405C2.21527 4.00596 1.66906 4.42536 1.33754 5C1.00602 5.57464 0.916346 6.25743 1.08825 6.89818C1.26016 7.53893 1.67957 8.08515 2.2542 8.41667L2.6242 8.63C2.45763 9.5363 2.45763 10.4654 2.6242 11.3717L2.2542 11.585C1.67957 11.9165 1.26016 12.4627 1.08825 13.1035C0.916346 13.7442 1.00602 14.427 1.33754 15.0017C1.66906 15.5763 2.21527 15.9957 2.85602 16.1676C3.49677 16.3395 4.17957 16.2499 4.7542 15.9183L5.12504 15.7042C5.82567 16.3027 6.63085 16.7666 7.50004 17.0725V17.5C7.50004 18.163 7.76343 18.7989 8.23227 19.2678C8.70111 19.7366 9.33699 20 10 20C10.6631 20 11.299 19.7366 11.7678 19.2678C12.2366 18.7989 12.5 18.163 12.5 17.5V17.0725C13.3689 16.7654 14.1735 16.3003 14.8734 15.7008L15.2459 15.9158C15.8205 16.2474 16.5033 16.337 17.1441 16.1651C17.7848 15.9932 18.331 15.5738 18.6625 14.9992C18.9941 14.4245 19.0837 13.7417 18.9118 13.101C18.7399 12.4602 18.3205 11.914 17.7459 11.5825L17.745 11.5833ZM15.6217 8.43667C15.9039 9.45922 15.9039 10.5391 15.6217 11.5617C15.5724 11.7396 15.5837 11.9289 15.6537 12.0998C15.7236 12.2707 15.8484 12.4135 16.0084 12.5058L16.9117 13.0275C17.1032 13.138 17.243 13.3201 17.3003 13.5336C17.3575 13.7472 17.3276 13.9747 17.2171 14.1663C17.1066 14.3578 16.9246 14.4975 16.711 14.5548C16.4974 14.6121 16.2699 14.5822 16.0784 14.4717L15.1734 13.9483C15.0133 13.8556 14.8269 13.8188 14.6436 13.8437C14.4603 13.8686 14.2904 13.9538 14.1609 14.0858C13.4191 14.843 12.4847 15.3833 11.4584 15.6483C11.2792 15.6944 11.1205 15.7987 11.0072 15.9449C10.8939 16.0911 10.8324 16.2709 10.8325 16.4558V17.5C10.8325 17.721 10.7447 17.933 10.5885 18.0893C10.4322 18.2455 10.2202 18.3333 9.9992 18.3333C9.77819 18.3333 9.56623 18.2455 9.40995 18.0893C9.25367 17.933 9.16587 17.721 9.16587 17.5V16.4567C9.16596 16.2717 9.10451 16.092 8.99121 15.9458C8.8779 15.7996 8.71917 15.6952 8.54004 15.6492C7.51366 15.3831 6.57948 14.8416 5.83837 14.0833C5.70881 13.9513 5.53898 13.8661 5.35567 13.8412C5.17235 13.8163 4.98596 13.8531 4.82587 13.9458L3.92254 14.4683C3.82773 14.5239 3.72286 14.5602 3.61397 14.5751C3.50509 14.59 3.39433 14.5832 3.28808 14.5551C3.18183 14.527 3.08219 14.4782 2.99489 14.4114C2.90759 14.3446 2.83435 14.2613 2.7794 14.1661C2.72445 14.0709 2.68887 13.9658 2.6747 13.8568C2.66053 13.7479 2.66807 13.6372 2.69686 13.5311C2.72566 13.425 2.77514 13.3257 2.84248 13.2389C2.90981 13.152 2.99366 13.0793 3.0892 13.025L3.99254 12.5033C4.15249 12.411 4.27726 12.2682 4.34725 12.0973C4.41724 11.9264 4.42848 11.7371 4.3792 11.5592C4.097 10.5366 4.097 9.45672 4.3792 8.43417C4.42759 8.25657 4.41582 8.06795 4.34571 7.89774C4.27561 7.72754 4.15113 7.58534 3.9917 7.49333L3.08837 6.97167C2.89686 6.86116 2.75709 6.6791 2.69982 6.46555C2.64254 6.25199 2.67245 6.02442 2.78295 5.83292C2.89346 5.64141 3.07552 5.50164 3.28907 5.44437C3.50263 5.38709 3.73019 5.41699 3.9217 5.5275L4.8267 6.05083C4.98635 6.14376 5.17235 6.18101 5.35548 6.15672C5.5386 6.13244 5.70846 6.048 5.83837 5.91667C6.58011 5.15945 7.51456 4.61918 8.54087 4.35417C8.72056 4.30797 8.8797 4.20313 8.99306 4.05625C9.10643 3.90938 9.16754 3.72887 9.1667 3.54333V2.5C9.1667 2.27899 9.2545 2.06702 9.41078 1.91074C9.56706 1.75446 9.77902 1.66667 10 1.66667C10.221 1.66667 10.433 1.75446 10.5893 1.91074C10.7456 2.06702 10.8334 2.27899 10.8334 2.5V3.54333C10.8333 3.7283 10.8947 3.90804 11.008 4.05423C11.1213 4.20043 11.2801 4.30478 11.4592 4.35083C12.4859 4.61679 13.4204 5.15824 14.1617 5.91667C14.2913 6.04872 14.4611 6.13391 14.6444 6.15881C14.8277 6.1837 15.0141 6.14689 15.1742 6.05417L16.0775 5.53167C16.1723 5.47609 16.2772 5.43981 16.3861 5.42492C16.495 5.41003 16.6057 5.41683 16.712 5.44492C16.8182 5.47301 16.9179 5.52184 17.0052 5.58859C17.0925 5.65535 17.1657 5.73872 17.2207 5.83389C17.2756 5.92907 17.3112 6.03417 17.3254 6.14316C17.3395 6.25214 17.332 6.36285 17.3032 6.46891C17.2744 6.57497 17.2249 6.67429 17.1576 6.76114C17.0903 6.848 17.0064 6.92068 16.9109 6.975L16.0075 7.49667C15.8484 7.58892 15.7243 7.73123 15.6545 7.90141C15.5847 8.07159 15.5732 8.26008 15.6217 8.4375V8.43667Z"
					fill="#75819A"
				/>
			</g>
			<defs>
				<clipPath id="clip0_340_421">
					<rect width="20" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default SettingsIcon;
