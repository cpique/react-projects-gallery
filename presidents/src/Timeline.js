import {React, Component} from 'react'
import Canvas from './Canvas'
import TimelineDot from './TimelineDot'
import * as d3 from 'd3'

class Timeline extends Component {
    constructor({ data = [] }) {
        const times = d3.extent(data.map(d => d.year))
        const range = [50, 800]
        super({ data })
        this.scale = d3.scaleTime().domain(times).range(range)
        this.state = { data, times, range }
    }
    render() {
        const { data } = this.state
        const { scale } = this
        return (
            <div className="timeline">
                <h1>{this.props.name} Presidents of Argentina before 1900</h1>
                <Canvas>
                    {data.map((d, i) =>
                        <TimelineDot position={scale(d.year)}
                            txt={`${d.year} - ${d.president}`}
                        />
                    )}
                </Canvas>
            </div>
        )
    }
}

export default Timeline