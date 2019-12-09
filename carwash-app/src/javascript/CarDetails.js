import React from 'react';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Divider, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
// icon
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import WarningIcon from '@material-ui/icons/Warning';
import CancelIcon from '@material-ui/icons/Cancel';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '1rem',
  },
  scoreCircle: {
    'text-align': 'center',
  },
  tableHeader: {
    'font-weight': 'bolder',
  },
  columIconPaper: {
    'text-align': 'center',
  },
  columIcon: {
    fontSize: '5rem',
    color: 'white',
    margin: 'auto',
  },
}));

function createData(name, disp, status, comment) {
  var icon = <RadioButtonUncheckedIcon />;
  var colortype = 0;
  
  if(status === '注意'){
    icon = <WarningIcon />
    colortype = 1;
  } else if(status === '問題あり'){
    icon = <CancelIcon />
    colortype = 2;
  }

  return { name, disp, status, icon, colortype, comment };
}

const rows = [
  createData('body', 'ボディ状態', '問題あり', '前回実施 11/20'),
  createData('glass', 'ガラス状態', '注意', '前回実施 11/20'),
  createData('wiper', 'ワイパーゴム', '良好', '-'),
  createData('washer', 'ウォッシャー液', '良好', '-'),
  createData('oil', 'オイル', '良好', '-'),
  createData('oil-filter', 'オイルフィルタ', '良好', '-'),
  createData('tire-air', 'タイヤ空気圧', '良好', '-'),
];

const rowStyle = [
  {
    color: 'Green',
  },
  {
    color: 'orange',
  },
  {
    color: 'red',
  },
];

function ScoreTable() {

  var classes = useStyles();


  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className={classes.tableHeader}>評価項目</TableCell>
          <TableCell className={classes.tableHeader}>状態</TableCell>
          <TableCell className={classes.tableHeader}>備考</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.disp}
            </TableCell>
            <TableCell style={rowStyle[row.colortype]}>{row.icon} {row.status}</TableCell>
            <TableCell>{row.comment}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function CarDetails(props) {

  var classes = useStyles();
  const {params} = props.match;
  const id = parseInt(params.id);
  console.log(props)

  return (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper className={classes.columIconPaper} style={{backgroundColor: 'lightblue'}}>
                <LocalCarWashIcon className={classes.columIcon}/>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6">洗車</Typography>
              <Typography>前回から<span style={{fontSize: '2rem'}}>16</span>日経過</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper className={classes.columIconPaper} style={{backgroundColor: 'lightgreen'}}>
                <LocalCarWashIcon className={classes.columIcon}/>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6">コーティング</Typography>
              <Typography>前回から<span style={{fontSize: '2rem'}}>1</span>か月経過</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper className={classes.columIconPaper} style={{backgroundColor: 'lightgreen'}}>
                <LocalCarWashIcon className={classes.columIcon}/>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6">コーティング</Typography>
              <Typography>前回から<span style={{fontSize: '2rem'}}>1</span>か月経過</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item sm={12} md={8}>
        <Paper className={classes.paper}>
          <Typography variant='h6'>カーステータス</Typography>
          <Divider />
          {ScoreTable()}
        </Paper>
      </Grid>
    </Grid>
  </div>
  );
}

export default CarDetails;