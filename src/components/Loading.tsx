import React from 'react'
import tw, { styled } from 'twin.macro'

/**
 * Animation to indicate that some process is running
 */
const Loading: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Container className={className}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  )
}

export default Loading

const Container = styled.div`
  ${tw`mx-auto`}
  position: relative;
  width: 80px;
  height: 80px;

  div {
    ${tw`bg-orange-300`};
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-of-type(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-of-type(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-of-type(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-of-type(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`
