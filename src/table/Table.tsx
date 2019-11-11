import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

interface CustomProps {
    data: any;
    // root: any;
    // table: any;
}

export class Tabla extends React.Component<CustomProps> {

    render() {
        // const classes = useStyles();
        return (
            <Paper>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map((course: any) => (
                            <TableRow key={course.id}>
                                <TableCell component="th" scope="course">{course.titulo}</TableCell>
                                <TableCell align="right">{course.horas}</TableCell>
                                {/* <TableCell align="right">{course.estado}</TableCell> */}
                                <TableCell align="right">{course.id_profesor}</TableCell>
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