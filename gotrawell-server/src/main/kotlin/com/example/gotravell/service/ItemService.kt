package com.example.gotravell.service

import com.example.gotravell.entity.Item
import com.example.gotravell.repository.ItemRepository
import org.springframework.stereotype.Service

@Service
class ItemService(private val itemRepository: ItemRepository) {

    fun findAllItems(): List<Item> = itemRepository.findAll()

    fun addItem(item: Item): Item = itemRepository.save(item)

    fun getItemById(itemId: Long): Item = itemRepository.findById(itemId).orElseThrow()

    fun updateItem(item: Item): Item = itemRepository.save(item)

    fun deleteItemById(itemId: Long) = itemRepository.deleteById(itemId)
}
