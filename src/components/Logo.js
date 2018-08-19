import React, { Component, Fragment } from 'react';
import styled from 'styled-components'

const LogoWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

const LogoContainer = styled.svg`
  margin: 0;
  padding: 0;
`;


class Logo extends Component {
  static defaultProps = {
    color: 'black'
  }

  render() {
    return (
        <LogoContainer
          x="0px"
          y="0px"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="300px"
          height="300px"
          viewBox="100 0 512 512"
          preserveAspectRatio="xMidYMid meet"
          enableBackground="new 0 0 512 512"
        >
          <g transform="translate(0.000000,370.000000) scale(0.100000,-0.100000)"
          fill="#fff" stroke="none">
          {/* <path d="M0 1850 l0 -1850 3000 0 3000 0 0 1850 0 1850 -3000 0 -3000 0 0
          -1850z m4520 0 l0 -1620 -1620 0 -1620 0 0 1620 0 1620 1620 0 1620 0 0 -1620z"/> */}
          <path d="M2685 3319 c-77 -22 -124 -105 -125 -220 0 -85 12 -129 47 -177 33
          -44 72 -62 138 -62 66 0 105 18 139 62 69 92 60 282 -17 356 -49 48 -112 62
          -182 41z m123 -65 c81 -56 80 -275 -1 -324 -59 -36 -132 -17 -163 42 -41 78
          -25 228 28 273 35 29 101 34 136 9z"/>
          <path d="M3445 3311 c-112 -50 -98 -183 23 -227 86 -31 136 -55 144 -67 4 -7
          8 -26 8 -44 0 -41 -30 -63 -88 -63 -57 0 -97 22 -111 60 -9 26 -15 31 -38 28
          -23 -2 -27 -7 -25 -28 9 -68 76 -110 175 -110 102 0 163 53 153 134 -6 49 -45
          90 -105 112 -140 51 -163 72 -141 125 30 70 178 51 180 -23 0 -14 9 -18 36
          -18 34 0 36 2 30 26 -11 44 -36 72 -80 94 -52 25 -108 25 -161 1z"/>
          <path d="M1500 3090 l0 -230 73 0 c181 0 257 69 257 233 0 84 -15 129 -57 171
          -43 44 -82 56 -183 56 l-90 0 0 -230z m196 165 c98 -41 99 -277 1 -323 -15 -8
          -52 -16 -82 -19 l-55 -6 0 182 0 181 50 0 c28 0 66 -7 86 -15z"/>
          <path d="M1995 3200 c-109 -45 -130 -242 -34 -313 57 -42 152 -38 197 7 25 24
          25 27 10 42 -15 16 -18 15 -44 -5 -29 -23 -83 -28 -116 -10 -18 10 -48 65 -48
          89 0 6 43 10 115 10 l115 0 0 38 c-1 53 -33 118 -69 136 -32 17 -93 20 -126 6z
          m103 -60 c12 -12 22 -25 22 -30 0 -4 3 -15 6 -24 5 -14 -6 -16 -79 -16 l-86 0
          11 30 c20 58 84 78 126 40z"/>
          <path d="M2220 3202 c0 -5 27 -82 60 -172 33 -90 60 -165 60 -167 0 -12 49 0
          55 15 18 45 115 321 115 327 0 3 -14 5 -31 3 -30 -3 -31 -6 -72 -131 l-42
          -129 -43 131 c-43 128 -44 131 -73 131 -16 0 -29 -4 -29 -8z"/>
          <path d="M3010 2970 l0 -240 30 0 30 0 0 80 0 80 25 -16 c13 -8 44 -16 69 -16
          81 0 124 49 133 151 7 78 -10 133 -52 170 -41 35 -96 41 -145 16 -25 -13 -29
          -13 -34 0 -3 8 -17 15 -31 15 l-25 0 0 -240z m174 179 c55 -26 72 -149 28
          -208 -23 -32 -82 -40 -118 -16 -22 14 -24 21 -24 105 0 84 1 90 26 109 30 24
          52 26 88 10z"/>
          <path d="M3824 3191 c-58 -35 -79 -77 -79 -156 0 -42 6 -82 15 -100 45 -89
          197 -104 257 -26 9 12 7 18 -8 29 -17 11 -23 10 -45 -7 -39 -31 -98 -28 -129
          5 -14 15 -25 33 -25 40 0 7 -3 19 -6 28 -5 14 8 16 110 16 l116 0 0 41 c0 117
          -112 187 -206 130z m101 -37 c16 -6 45 -54 45 -74 0 -6 -31 -10 -80 -10 -71 0
          -80 2 -80 19 0 44 68 83 115 65z"/>
          <path d="M4180 3202 c-69 -32 -94 -78 -94 -166 -1 -117 48 -176 147 -176 56 0
          97 21 121 60 23 40 20 50 -14 50 -20 0 -30 -5 -30 -15 0 -24 -45 -47 -86 -43
          -54 4 -79 42 -78 116 0 77 23 119 69 128 40 7 84 -15 92 -47 4 -13 14 -19 34
          -19 40 0 38 30 -4 77 -30 32 -40 36 -88 39 -30 2 -61 0 -69 -4z"/>
          <path d="M2029 2635 c-28 -9 -60 -30 -81 -52 -19 -21 -52 -47 -73 -58 -57 -29
          -78 -72 -81 -168 -3 -65 -7 -82 -22 -93 -44 -30 -33 -97 27 -173 16 -20 34
          -56 41 -81 6 -25 22 -63 35 -86 l24 -41 -47 -12 c-81 -21 -112 -59 -112 -137
          0 -48 -2 -52 -26 -58 -43 -11 -127 -70 -168 -117 -21 -24 -52 -73 -69 -108
          -27 -56 -30 -74 -31 -165 l-1 -101 102 -3 102 -3 3 -62 3 -62 1007 -3 1008 -2
          5 22 c3 13 4 329 3 703 l-3 680 -579 5 c-467 4 -580 8 -584 18 -2 7 -14 25
          -27 40 -19 22 -21 31 -13 54 6 16 7 39 4 53 l-6 25 -38 -20 c-44 -24 -61 -25
          -127 -5 -75 23 -220 28 -276 10z m179 -45 c39 -5 97 -17 128 -26 52 -15 54
          -17 40 -33 -23 -25 -20 -31 14 -31 64 0 98 -67 82 -165 -7 -48 -9 -50 -37 -46
          -17 1 -71 4 -122 4 -79 2 -96 -1 -121 -20 l-29 -21 -34 21 c-28 19 -47 22
          -124 20 -49 0 -103 -3 -120 -4 l-30 -4 -3 76 c-2 64 0 79 18 102 15 19 31 27
          51 27 24 0 32 6 40 29 12 33 48 61 94 72 42 10 70 10 153 -1z m1410 -327 l-3
          -148 -525 -3 c-289 -1 -531 0 -538 3 -9 3 -7 14 8 42 27 51 25 79 -8 113 -26
          26 -28 33 -24 84 l4 56 545 0 544 0 -3 -147z m-1521 -36 c3 -4 -2 -24 -11 -46
          -14 -29 -25 -40 -48 -45 -49 -10 -76 -7 -92 10 -16 16 -22 75 -8 88 8 9 149 2
          159 -7z m287 7 c13 -5 15 -14 10 -43 -9 -51 -21 -61 -69 -61 -57 0 -73 7 -90
          41 -30 57 -20 65 82 68 28 0 59 -2 67 -5z m-519 -51 c4 -31 16 -55 35 -75 26
          -25 35 -28 97 -28 80 0 104 13 133 71 11 21 25 39 30 39 5 0 16 -15 24 -33 23
          -57 59 -77 135 -77 84 1 105 16 123 90 13 52 16 55 47 58 32 3 33 2 27 -25 -4
          -15 -22 -44 -41 -63 -23 -24 -35 -49 -40 -80 -15 -95 -81 -182 -177 -232 -51
          -26 -134 -29 -190 -5 -83 35 -178 156 -178 229 0 17 -14 41 -40 68 -59 61 -66
          110 -16 110 20 0 25 -6 31 -47z m1753 -595 l-3 -473 -950 0 -950 0 -3 33 -3
          32 580 0 581 0 0 78 c0 137 -47 249 -142 338 -29 28 -74 60 -100 73 -47 22
          -48 24 -48 69 0 80 -44 128 -133 147 l-28 6 19 27 c17 25 26 45 51 115 l11 27
          560 0 560 0 -2 -472z m-1687 200 c0 -59 28 -122 72 -167 37 -38 37 -39 19 -61
          -17 -21 -22 -22 -54 -11 -87 29 -165 102 -175 166 -12 74 24 114 105 115 31 0
          32 -1 33 -42z m564 17 c65 -64 2 -192 -122 -247 l-43 -19 -24 28 -23 27 28 28
          c33 33 69 124 69 173 0 35 0 35 45 35 35 0 52 -6 70 -25z m-171 -32 c-7 -45
          -45 -107 -76 -127 -13 -8 -43 -19 -67 -25 -72 -16 -135 18 -172 91 -17 32 -26
          88 -15 88 2 0 29 -12 61 -26 49 -23 67 -26 120 -21 42 3 78 13 107 30 23 14
          44 25 46 26 2 1 0 -16 -4 -36z m-519 -184 c45 -46 150 -109 183 -109 23 0 14
          -67 -13 -94 -30 -31 -32 -65 -4 -100 14 -18 30 -26 53 -26 71 0 103 82 50 131
          -23 21 -25 30 -21 73 6 68 29 86 114 86 55 0 67 -4 88 -25 32 -31 32 -62 0
          -87 -19 -15 -25 -29 -25 -58 0 -74 88 -105 132 -47 24 31 22 61 -7 95 -14 17
          -25 34 -25 39 0 5 27 21 60 36 34 16 82 50 109 77 28 28 56 50 64 50 24 0 130
          -76 160 -115 47 -59 78 -138 84 -215 l6 -70 -657 0 -656 0 0 49 c0 70 34 168
          78 226 32 43 149 135 171 135 4 0 29 -23 56 -51z m520 -209 c0 -22 -29 -18
          -33 3 -3 14 1 18 15 15 10 -2 18 -10 18 -18z m-279 -31 c10 -17 -13 -36 -27
          -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"/>
          <path d="M2982 2333 c-15 -6 -42 -56 -42 -77 0 -8 12 -28 26 -45 34 -41 84
          -43 119 -5 32 35 32 78 0 109 -23 24 -69 32 -103 18z m66 -67 c4 -21 -14 -37
          -35 -29 -14 5 -18 35 -6 47 12 12 38 1 41 -18z"/>
          <path d="M3192 2317 c-69 -74 32 -179 112 -116 35 27 36 86 3 117 -32 30 -87
          29 -115 -1z m85 -43 c3 -8 -2 -23 -11 -32 -14 -15 -18 -15 -31 -1 -9 9 -13 23
          -9 32 8 21 43 22 51 1z"/>
          <path d="M3411 2314 c-28 -36 -27 -79 4 -109 61 -62 162 3 134 85 -13 36 -36
          50 -83 50 -25 0 -40 -7 -55 -26z m87 -50 c4 -29 -28 -41 -45 -18 -10 13 -10
          21 -1 31 16 19 42 12 46 -13z"/>
          <path d="M2582 1873 l3 -28 278 -3 277 -2 0 30 0 30 -281 0 -280 0 3 -27z"/>
          <path d="M3200 1869 c0 -29 1 -30 43 -27 38 3 42 6 45 31 3 26 2 27 -42 27
          -45 0 -46 -1 -46 -31z"/>
          <path d="M3340 1870 l0 -30 90 0 90 0 0 30 0 30 -90 0 -90 0 0 -30z"/>
          <path d="M2820 1675 c0 -20 5 -25 25 -25 20 0 25 5 25 25 0 20 -5 25 -25 25
          -20 0 -25 -5 -25 -25z"/>
          <path d="M2930 1675 c0 -20 5 -25 25 -25 20 0 25 5 25 25 0 20 -5 25 -25 25
          -20 0 -25 -5 -25 -25z"/>
          <path d="M3040 1675 c0 -25 1 -25 90 -25 89 0 90 0 90 25 0 25 -1 25 -90 25
          -89 0 -90 0 -90 -25z"/>
          <path d="M3270 1675 l0 -25 125 0 125 0 0 25 0 25 -125 0 -125 0 0 -25z"/>
          <path d="M2990 1475 c0 -24 2 -25 65 -25 63 0 65 1 65 25 0 24 -2 25 -65 25
          -63 0 -65 -1 -65 -25z"/>
          <path d="M3170 1475 c0 -20 5 -25 25 -25 20 0 25 5 25 25 0 20 -5 25 -25 25
          -20 0 -25 -5 -25 -25z"/>
          <path d="M3280 1475 c0 -18 5 -25 20 -25 15 0 20 7 20 25 0 18 -5 25 -20 25
          -15 0 -20 -7 -20 -25z"/>
          <path d="M3370 1475 c0 -24 2 -25 75 -25 73 0 75 1 75 25 0 24 -2 25 -75 25
          -73 0 -75 -1 -75 -25z"/>
          <path d="M2990 1275 l0 -25 115 0 115 0 0 25 0 25 -115 0 -115 0 0 -25z"/>
          <path d="M3270 1275 c0 -20 5 -25 25 -25 20 0 25 5 25 25 0 20 -5 25 -25 25
          -20 0 -25 -5 -25 -25z"/>
          <path d="M3370 1275 c0 -24 2 -25 75 -25 73 0 75 1 75 25 0 24 -2 25 -75 25
          -73 0 -75 -1 -75 -25z"/>
          </g>

        </LogoContainer>

    )
  }

}

export default Logo;
