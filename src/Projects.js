import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import tileData from './tileData';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    li: {
        listStyleType: 'none',
    },
    img: {
        width: '100%',
    }
}));

export default function TitlebarGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {tileData.map(tile => (
                    <Grid key={tile.img} item sm={12} md={6}>
                        <GridListTile className={classes.li}>
                            <img src={tile.img} alt={tile.title} className={classes.img} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}