import React, { useState } from "react";
import { ListGroup, Image, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { rankList, removeShowList } from "../redux/ActionCreators";
import { SHOWS } from "../shared/shows";
import { USERS } from "../shared/users";

function RankList(props) {
  const history = useHistory();

  const dispatch = useDispatch();

  const userLogged = useSelector((state) => state.user);
  //const isLogged = JSON.stringify(userLogged) !== "{}";

  const { lists } = useSelector((state) => state.lists);
  const currentList = lists.filter(
    (list) => list.id === Number(props.listId)
  )[0];
  currentList.user = USERS.find(
    (user) => user.id === currentList.userId
  ).username;
  //const shows = SHOWS.filter((show) => currentList.list.includes(show.id));
  const shows = currentList.list.map(
    (id) => SHOWS.filter((show) => show.id === id)[0]
  );

  const [rank, setRank] = useState(shows);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(rank);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setRank(items);
  }

  function saveRank() {
    dispatch(rankList(currentList.id, rank));
    history.push(`/myLists/${userLogged.id}/${currentList.id}/?save=rank`);
  }

  function removeShow(showId) {
    setRank(rank.filter((show) => show.id !== showId));
  }

  function resetRank() {
    setRank(shows);
  }

  return (
    <div className="container mt-4">
      <div className="row featured mb-3">
        <div className="col-10 col-md-6">
          <h1 className="pageTitle">Rank</h1>
        </div>
        <div className="col-2 text-truncate text-end">
          <h3>
            <Link
              to=""
              onClick={() => history.goBack()}
              className="text-decoration-none"
            >
              <i className="bi bi-backspace"></i> <h6>back</h6>
            </Link>
          </h3>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <h6 className="pageTitle">
            <i className="bi bi-grip-vertical"></i> Drag and drop each show to
            change its rank.
          </h6>
        </div>
      </div>
      <div className="row mb-3 ms-2">
        <div className="col-6">
          <h1 className="pageTitle">{currentList.name}</h1>
        </div>
        <div className="col-2 text-center">
          <Button
            variant="success"
            className="shadow-sm text-nowrap"
            onClick={saveRank}
          >
            Save Rank
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="shows">
              {(provided) => (
                <ListGroup
                  //   variant="flush"
                  className="shows"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {rank.map((show, index) => (
                    <Draggable
                      key={show.id}
                      draggableId={"" + show.id}
                      index={index}
                    >
                      {(provided) => (
                        <ListGroup.Item
                          className="shadow"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="row">
                            <div className="col-2 text-center  p-0 m-0">
                              <i className="bi bi-grip-vertical p-0 m-0"></i>
                              <Image
                                src={show.image.medium}
                                thumbnail
                                style={{ width: 80 }}
                                className="p-0 shadow"
                              />
                            </div>

                            <div
                              className="col featured d-flex align-items-center "
                              // style={{
                              // backgroundImage: `url(${show.image.original})`,
                              // backgroundSize: "cover",
                              // backgroundPositionY: "center",
                              // color: "white",
                              // }}
                            >
                              <h3 className="p-3 rankText">
                                {index + 1}
                                {". "} {show.name}
                              </h3>
                            </div>
                            <div className="col-2">
                              <Button
                                variant="outline-danger"
                                // size="sm"
                                className="shadow-sm"
                                onClick={() => removeShow(show.id)}
                              >
                                <i className="bi bi-trash"></i>
                              </Button>
                            </div>
                          </div>
                        </ListGroup.Item>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ListGroup>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-8 text-center">
          <Button variant="success" className="shadow-sm" onClick={saveRank}>
            Save Rank
          </Button>
          <Button
            variant="secondary"
            className="shadow-sm ms-2"
            onClick={() => history.goBack()}
          >
            Cancel
          </Button>
          <Button
            variant="warning"
            className="shadow-sm ms-2"
            onClick={resetRank}
          >
            Reset Rank
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RankList;
