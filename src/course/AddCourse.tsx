import { Button, FormControl, Input, InputLabel, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import * as React from 'react';

interface IProps {
    teachers: any[],
    fetchCourses: any,
    hideAddCourse: any
}

interface IState {
    title: string,
    hours: any,
    active: number,
    teacher: any,
    level: string
}

export class AddCourse extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            title: "",
            hours: "",
            active: 0,
            teacher: "",
            level: ""
        };
    }

    render() {
        return (
            <Paper className="addCourse">
                <Typography variant="h5" gutterBottom>
                    Añadir curso
                </Typography>
                <div>
                    <FormControl >
                        <InputLabel id="active-label">Activo</InputLabel>
                        <Select className="formControl"
                            labelId="active-label" value={this.state.active}
                            id="active" onChange={this.handleActiveChange}>
                            <MenuItem value={1}>Sí</MenuItem>
                            <MenuItem value={0}>No</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl >
                        <InputLabel id="teacher-label">Profesor</InputLabel>
                        <Select className="formControl"
                            labelId="teacher-label" value={this.state.teacher}
                            id="teacher" onChange={this.handleTeacherChange}>
                            {this.props.teachers.map((teacher, index) => {
                                return <MenuItem key={index} value={teacher.id}>{teacher.name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl >
                        <InputLabel id="demo-simple-select-label">Título</InputLabel>
                        <Input value={this.state.title} className="formControl" onChange={this.handleTitleChange} />
                    </FormControl>
                </div>
                <div>
                    <FormControl >
                        <InputLabel id="demo-simple-select-label">Nivel</InputLabel>
                        <Select className="formControl"
                            labelId="level-label" value={this.state.level}
                            id="level" onChange={this.handleLevelChange}>
                            <MenuItem value={"Básico"}>Básico</MenuItem>
                            <MenuItem value={"Intermedio"}>Intermedio</MenuItem>
                            <MenuItem value={"Avanzado"}>Avanzado</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl >
                        <InputLabel id="hours-label">Horas</InputLabel>
                        <Input value={this.state.hours} type="number" className="formControl" onChange={this.handleHourChange} />
                    </FormControl>
                </div>
                <div className="actionButtons">
                    <Button variant="contained" onClick={this.cancel} color="primary">
                        Cancelar
                    </Button>
                    <Button variant="contained" onClick={this.addCourse} color="primary">
                        Añadir
                    </Button>
                </div>
            </Paper>
        );
    }

    addCourse = () => {
        fetch('http://localhost:8080/autentia/course', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.mapStateToBack())
        })
            .then(r => this.props.fetchCourses())
            .then(() => {
                this.clearForm();
                this.props.hideAddCourse();
            })
    }

    cancel = () => {
        this.clearForm();
        this.props.hideAddCourse();
    }

    mapStateToBack() {
        return {
            titulo: this.state.title,
            nivel: this.state.level,
            horas: this.state.hours,
            estado: this.state.active === 1 ? true : false,
            id_profesor: this.state.teacher
        }
    }

    clearForm() {
        let initialState: any = {
            title: "",
            level: "",
            hours: "",
            active: 0,
            teacher: ""
        }
        this.setState(initialState);
    }

    handleActiveChange = (event: any) => {
        this.setState({ active: event.target.value });
    }

    handleTitleChange = (event: any) => {
        this.setState({ title: event.target.value });
    }

    handleTeacherChange = (event: any) => {
        this.setState({ teacher: event.target.value });
    }

    handleLevelChange = (event: any) => {
        this.setState({ level: event.target.value });
    }

    handleHourChange = (event: any) => {
        this.setState({ hours: event.target.value });
    }
}