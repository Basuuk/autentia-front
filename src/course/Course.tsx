import * as React from 'react';
import { Tabla } from '../table/Table';

interface IState {
    error: any,
    isLoaded: boolean,
    course: any[]
}

interface IProps {

}

export class Course extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            course: []
        };
    }

    render() {
        const { error, isLoaded, course } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Tabla data={course} />
            )
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/autentia/course?offset=0&limit=10")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        course: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
}
