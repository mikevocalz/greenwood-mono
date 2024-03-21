import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ChevronRight = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={props.width}
    height={props.height}
    viewBox="0 0 185.343 185.343"
    {...props}
  >
    <Path
      strokeWidth={20}
      stroke={'#166534'}
      fill={'#166534'}
      d="M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z"

    />
  </Svg>
)
export default ChevronRight
