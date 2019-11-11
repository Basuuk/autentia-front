import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

interface CustomProps {
    courses: any;
    teachers: any;
}

export class Tabla extends React.Component<CustomProps> {

    render() {
        return (
            <Paper>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Título</TableCell>
                            <TableCell align="right">Horas</TableCell>
                            <TableCell align="right">Profesor</TableCell>
                            <TableCell align="right">Nivel</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.courses.map((course: any) => (
                            <TableRow key={course.id}>
                                <TableCell component="th" scope="course">{course.titulo}</TableCell>
                                <TableCell align="right">{course.horas}</TableCell>
                                <TableCell align="right">{this.props.teachers.find(teacher => teacher.id == course.id_profesor).name}</TableCell>
                                <TableCell align="right">{course.nivel}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }

    pinta = () => {
        console.log(this.props);
    }
}