import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../core/services/usersFetch';
import { faveUserAction, loadUsersAction, selectUserAction } from './UsersComponentActions';

const UsersComponent = () => {
  const dispatch = useDispatch();
  const { users, userSelected, userFavorite } = useSelector(
    (state) => state.usersComponentReducer
  );

  // Aqui llamo al estado global del componente MobileComponent (accedo a su reducer que es su "almacen de datos")
  const { mobiles } = useSelector((state) => state.mobileComponentReducer);

  const loadUsers = () => {
    const auxData = getAllUsers();
    dispatch(loadUsersAction(auxData));
  };

  const selectUserHandler = (userData) => {
    dispatch(selectUserAction(userData));
  };

  const resetUserSelected = () => {
    dispatch(selectUserAction(undefined));
  };

  const setFavoriteState = (userData) => {
    dispatch(faveUserAction(userData))
  } 

  // Esta fucnion está accediendo al contenido obtenido del reducer del otro componente (mobileComponentReducer)
  const getInfoMobileById = (idMobile) => {
    const auxMobileData = mobiles.find((m) => m.id === idMobile);
    if (!auxMobileData) {
      return ' no dispone de ningun movil.';
    } else {
      return ` tiene el movil ${auxMobileData.brand} ${auxMobileData.model}.`;
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      
      {!users ? (
        <h2>Cargando datos...</h2>
      ) : (
        <div>
          <p>Número de usuarios: {users.length}</p>
        {users.map((u, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              gap: '50px',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '5px',
            }}
          >
            <span>
              {u.username} {u.password}
            </span>
            <button onClick={() => setFavoriteState(u)}>{userFavorite ? (<p>favorite</p>) : (<p>no favorite</p>)}</button>
            <button onClick={() => selectUserHandler(u)}>Select</button>
          </div>
        ))}
        </div>
      )}
      <hr />
      {!userSelected ? (
        <h4>No se ha seleccionado ningún usuario</h4>
      ) : (
        <div
          style={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>
            El usuario {userSelected.username}{' '}          
            {getInfoMobileById(userSelected.mobile)}
          </span>
          <button onClick={resetUserSelected}>Clear selected</button>
        </div>
      )}
    </div>
  );
};

export default UsersComponent;
