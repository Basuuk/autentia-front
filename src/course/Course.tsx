import { Button, Typography } from '@material-ui/core';
import * as React from 'react';
import { Tabla } from '../table/Table';
import { AddCourse } from './AddCourse';

interface IState {
    error: any,
    coursesLoaded: boolean,
    teachersLoaded: boolean,
    courses: any[],
    teachers: any[],
    hideAddCourse: boolean
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
            teachers: [],
            hideAddCourse: true
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
                <div>
                    <Typography variant="h4" gutterBottom>
                        Catálogo de cursos
                    </Typography>
                    <Tabla courses={courses} teachers={teachers} />
                    <div className="addButton">
                        <Button variant="contained" color="primary" onClick={this.showAddCourse}>
                            Añadir curso
                        </Button>
                    </div>
                    {this.state.hideAddCourse ? null : <AddCourse teachers={teachers} fetchCourses={this.fetchCourses} hideAddCourse={this.hideAddCourse} />}
                </div>
            );
        }
    }

    showAddCourse = () => {
        this.setState({ hideAddCourse: false });
    }

    hideAddCourse = () => {
        this.setState({ hideAddCourse: true });
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

    private fetchCourses = () => {
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
