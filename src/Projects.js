import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import tileData from './tileData';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    welcome: {
        height: 'calc(100vh + 53px)',
    },
    gridContainer: {
        margin: '0',
    },
    titlePositionBottom: {
        bottom: '7px',
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

    const [scroll, setScroll] = useState(0);
    const [scrollItems, setScrollItems] = useState([]);

    useEffect(() => {
        function onScrollOrResize() {
            setScroll((window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0) +
                getViewportHeight());
        }

        // onScrollOrResize();

        window.addEventListener('scroll', onScrollOrResize);
        window.addEventListener('resize', onScrollOrResize);

        return () => {
            window.removeEventListener('scroll', onScrollOrResize);
            window.removeEventListener('resize', onScrollOrResize);
        }
    }, [])

    useEffect(() => {
        var elemScroll = [];
        var elems = document.getElementsByName('scrollGrow');
        for (var i = 0; i < elems.length; i++) {
            var elem = elems[i];
            var scrollItem = scrollItems.find(si => si.id == elem.id);
            var grow = scrollItem ? scrollItem.grow || (scrollItem.scroll > getViewportHeight() && scrollItem.scroll < scroll) : false;
            if (grow)
                console.log(scrollItem.scroll + ' ' + scroll)
            elemScroll.push({ id: elem.id, scroll: elem.offsetTop - elem.scrollTop + elem.clientTop, grow: grow });
        }

        setScrollItems(elemScroll);
    }, [scroll]);

    function getGrow(id) {
        var item = scrollItems.find(si => si.id == id);
        // console.log(item);

        // if (item && !item.scroll) {
        //     item = document.getElementById(id);
        //     console.log(item);
        //     item = { scroll: item.offsetTop - item.scrollTop + item.clientTop };
        // }

        // console.log(scroll + ': ' + (item ? item.scroll : 0));
        return item && item.grow;
    }

    function getViewportHeight() {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }

    return (
        <div className={classes.root}>
            <Box
                display="flex"
                alignItems="center"
                css={{ height: 'calc(100vh + 53px)' }}
                className={classes.welcome}>
                <Typography variant="h1" component="h2">
                    Hola
                </Typography>
            </Box>
            <Grid
                container
                spacing={3}
                className={classes.gridContainer}>
                {tileData.map((tile, index) => (
                    <Grid key={tile.img} item sm={12} md={6}>
                        <Grow
                            in={getGrow('img_' + index)}
                            timeout={1000}>
                            <GridListTile
                                className={classes.li}
                                id={'img_' + index}
                                name={'scrollGrow'}>
                                <img src={tile.img} alt={tile.title} className={classes.img} />
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>{tile.client}</span>}
                                    className={classes.titlePositionBottom}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        </Grow>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}