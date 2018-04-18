import React from 'react'
import Link from 'gatsby-link'
import { VictoryPie } from 'victory';

const Ansatte = () => (
  <div>
     <VictoryPie
       padAngle={1}
       innerRadius={130}
       colorScale={["#f25855", "#7fc882"]}
       height={400}
       width={400}
       data={[
              { x: 10, y: 10 },
              { x: 10, y: 10 },
            ]}
        />
  </div>
)

export default Ansatte
