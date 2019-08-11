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
    const [originalOffsetHeight, setOriginalOffsetHeight] = useState([]);

    useEffect(() => {
        function onScrollOrResize(event) {
            if (event && event.type === 'resize') {
                let elemScroll = [];
                let elems = document.getElementsByName('scrollGrow');

                for (var i = 0; i < elems.length; i++) {
                    let elem = elems[i];
                    let eScroll = elem.offsetTop - elem.scrollTop + elem.clientTop;
                    elemScroll.push({ id: elem.id, scroll: eScroll, grow: eScroll < scroll });
                }

                setScrollItems(elemScroll);
            }

            setScroll((window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0) +
                getViewportHeight());
        }

        let elemsOriginalHeight = [];
        let elems = document.getElementsByName('scrollGrow');
        for (var i = 0; i < elems.length; i++) {
            elemsOriginalHeight[i] = elems[i].offsetHeight;
        }
        setOriginalOffsetHeight(elemsOriginalHeight);

        window.addEventListener('scroll', onScrollOrResize);
        window.addEventListener('resize', onScrollOrResize);

        setTimeout(() => {
            onScrollOrResize();
        }, 1);

        return () => {
            window.removeEventListener('scroll', onScrollOrResize);
            window.removeEventListener('resize', onScrollOrResize);
        }
    }, [])

    useEffect(() => {
        let elems = document.getElementsByName('scrollGrow');
        
        if (elems[0].offsetHeight === originalOffsetHeight[0]) {
            let elemScroll = [];

            for (var i = 0; i < elems.length; i++) {
                let elem = elems[i];
                let scrollItem = scrollItems.find(si => si.id == elem.id);
                let grow = scrollItem ? scrollItem.grow || scrollItem.scroll < scroll : false;
                
                elemScroll.push({ id: elem.id, scroll: elem.offsetTop - elem.scrollTop + elem.clientTop, grow: grow });
            }

            setScrollItems(elemScroll);
        } else {
            setOriginalOffsetHeight(Array.from(elems).map(elem => elem.offsetHeight));
            setScroll(scroll + 1);
            
            setTimeout(() => {
                document.getElementById('welcome').classList.remove('d-none');
            }, 100);
        }
    }, [scroll]);

    function getGrow(id) {
        var item = scrollItems.find(si => si.id == id);
        
        return item && item.grow;
    }

    function getViewportHeight() {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }

    return (
        <div className={classes.root}>
            <Box
                display='flex'
                alignItems='center'
                css={{ height: 'calc(100vh + 53px)' }}
                className={classes.welcome}>
                <Typography 
                    id={'welcome'} 
                    variant="h1"
                    component="h2"
                    className="d-none">
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