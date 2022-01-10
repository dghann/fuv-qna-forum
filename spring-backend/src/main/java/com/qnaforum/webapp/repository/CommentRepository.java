package com.qnaforum.webapp.repository;

import com.qnaforum.webapp.model.entity.Comment;
import com.qnaforum.webapp.model.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

  Page<Comment> findAllByOrderByCreatedDateDesc(Pageable pageable);

  Optional<Comment> findById(Long id);
}
