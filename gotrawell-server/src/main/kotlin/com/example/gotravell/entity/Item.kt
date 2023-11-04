package com.example.gotravell.entity

import jakarta.persistence.*


@Entity
@Table(name = "items")
data class Item(
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	val id: Long = 0,
	val name: String,
	val description: String
)
