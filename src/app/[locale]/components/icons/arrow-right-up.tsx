import * as React from 'react';

function ArrowRightUp(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  {...props}>
    <path d="M7 17L17 7" stroke={props.stroke || '#1181F7'} strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M7 7H17V17" stroke={props.stroke || '#1181F7'} strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>);
}

export default ArrowRightUp;
