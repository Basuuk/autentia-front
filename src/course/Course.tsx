import * as React from 'react';
import { Tabla } from '../table/Table';

interface IState {
    error: any,
    coursesLoaded: boolean,
    teachersLoaded: boolean,
    courses: any[],
    teachers: any[]
}

interface IProps {

}

export class Course extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            coursesLoaded: false,
            teachersLoaded: false,
            courses: [],
            teachers: []
        };
    }

    render() {
        const { error, coursesLoaded, teachersLoaded, courses, teachers } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!coursesLoaded || !teachersLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Tabla courses={courses} teachers={teachers}/>
            )
        }
    }

    componentDidMount() {
        this.fetchCourses();
        this.fetchTeachers();
    }

    private fetchTeachers() {
        fetch("http://localhost:8080/autentia/teacher?offset=0&limit=100")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    teachersLoaded: true,
                    teachers: result
                });
            }, (error) => {
                this.setState({
                    teachersLoaded: true,
                    error
                });
            });
    }

    private fetchCourses() {
        fetch("http://localhost:8080/autentia/course?offset=0&limit=10")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    coursesLoaded: true,
                    courses: result
                });
            }, (error) => {
                this.setState({
                    coursesLoaded: true,
                    error
                });
            });
    }
}
