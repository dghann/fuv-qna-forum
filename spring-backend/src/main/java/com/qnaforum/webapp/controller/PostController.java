package com.qnaforum.webapp.controller;

import com.qnaforum.webapp.exception.AppException;
import com.qnaforum.webapp.model.dto.PostDto;
import com.qnaforum.webapp.model.entity.Post;
import com.qnaforum.webapp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping("/{pid}")
    public ResponseEntity<PostDto> getPost(@PathVariable Long pid) {
        Post post = postService.findById(pid)
            .orElseThrow(() -> new AppException("Post does not exist", HttpStatus.NOT_FOUND));
        return new ResponseEntity<>(new PostDto(post), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<PostDto>> getPostList(Pageable pageable) {
        Page<Post> postList = postService.findAllByOrderByCreatedDateDescPageable(pageable);
        Page<PostDto> postDto = postList.map(post -> new PostDto((post)));
        return new ResponseEntity<>(postDto.getContent(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PostDto> addPost(@RequestBody PostDto postDto) {
        postService.addPost(postDto);
        return new ResponseEntity<PostDto>(HttpStatus.CREATED);
    }

}
