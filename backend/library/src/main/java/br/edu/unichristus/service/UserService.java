package br.edu.unichristus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.edu.unichristus.domain.dto.user.UserDTO;
import br.edu.unichristus.domain.dto.user.UserLowDTO;
import br.edu.unichristus.domain.dto.user.UserRolesDTO;
import br.edu.unichristus.domain.model.User;
import br.edu.unichristus.exception.CommonsException;
import br.edu.unichristus.repository.UserRepository;
import br.edu.unichristus.utils.MapperUtil;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserLowDTO save(UserDTO user){
        if(repository.findByEmail(user.getEmail()).isPresent()){
            throw new CommonsException(HttpStatus.CONFLICT,
                    "unichristus.user.email.conflict",
                    "Email já cadastrado!");
        }

        if (user.getName() == null) {
            throw new CommonsException(HttpStatus.BAD_REQUEST,
                    "unichristus.user.name.badrequest",
                    "Nome do usuário é um campo obrigatório");
        }

        var userEntity = MapperUtil.parseObject(user, User.class);
        var savedUser = repository.save(userEntity);
        return MapperUtil.parseObject(savedUser, UserLowDTO.class);
    }

    public UserLowDTO update(Long id, UserDTO userDTO) {
        if (userDTO.getName() == null) {
            throw new CommonsException(HttpStatus.BAD_REQUEST,
                    "unichristus.user.name.badrequest",
                    "Nome do usuário é obrigatório para atualização!");
        }

        var existingUser = repository.findById(id);
        if (existingUser.isEmpty()) {
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.user.update.notfound",
                    "Usuário não encontrado para atualização!");
        }

        var userEntity = existingUser.get();

        var userWithSameEmail = repository.findByEmail(userDTO.getEmail());
        if (userWithSameEmail.isPresent() && !userWithSameEmail.get().getId().equals(id)) {
            throw new CommonsException(HttpStatus.CONFLICT,
                    "unichristus.user.email.conflict",
                    "Esse email já está em uso por outro usuário!");
        }


        userEntity.setName(userDTO.getName());
        userEntity.setEmail(userDTO.getEmail());
        
        // Só atualiza a senha se uma nova senha foi fornecida
        if (userDTO.getPassword() != null && !userDTO.getPassword().isBlank()) {
            userEntity.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        }
        // Se password é null ou vazio, mantém a senha atual (não faz nada)

        var updatedUser = repository.save(userEntity);
        return MapperUtil.parseObject(updatedUser, UserLowDTO.class);
    }


    public List<User> findAll(){
        var listUsers = repository.findAll();
        return MapperUtil.parseListObjects(listUsers, User.class);
    }

    public User findById(Long id){
        var userEntity = repository.findById(id);
        if(userEntity.isEmpty()){
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.user.findbyid.notfound",
                    "Usuário não encontrado!");
        }

        return repository.findById(id).get();
    }

    public User findByEmail(String email) {    //método para o login
        var userEntity = repository.findByEmail(email);
        if(userEntity.isEmpty()) {
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.user.findbyemail.notfound",
                    "Email ou senha inválidos.");
        }
        return repository.findByEmail(email).get();
    }

    public void delete(Long id){
        var userEntity = repository.findById(id);

        if(userEntity.isEmpty()){
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.user.delete.notfound",
                    "Usuário não encontrado!");
        }
        repository.deleteById(id);
    }

    public UserRolesDTO getRolesByUserId(Long id){
        var userEntity = repository.findById(id);
        if(userEntity.isEmpty()){
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.user.findbyid.notfound",
                    "Usuário não encontrado!");
        }
        var userDTO = MapperUtil.parseObject(userEntity, UserRolesDTO.class);
        userDTO.setRoles(new String[]{"MANAGER", "ADMIN", "COMMON_USER"});

        return userDTO;
    }


}
